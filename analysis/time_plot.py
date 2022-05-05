import pandas as pd
import numpy as np
import json
from scipy import stats
from matplotlib import pyplot as plt
import seaborn as sns

def remove_outliers(df):
    complete_time = df[["id", "rt"]].groupby("id").agg("mean")
    total_mean = np.mean(complete_time.values)
    total_std = np.std(complete_time.values)

    outliers = []
    for elem in complete_time.itertuples():
        if np.abs(elem.rt - total_mean) > 2 * total_std:
            outliers.append(elem.Index)

    df = df[~df["id"].isin(outliers)]
    return df

# Loading dataset
df = pd.read_csv("../data/rulebased_cat_brand_2022.csv")

# Removing outliers (> 2 std)
training_phase = remove_outliers(df[df["rules_set"] == "ruleset1"])
rule_change = remove_outliers(df[df["rules_set"] == "ruleset2a"])
new_rule = remove_outliers(df[df["rules_set"] == "ruleset2b"])
new_rule_mix = remove_outliers(df[df["rules_set"] == "ruleset2c"])

# Collecting results for the training phase and calculate median and mad
results = []
training_time = training_phase[["id", "rt"]].groupby("id").agg("mean")
print("Time Training:     M={} (MAD={})".format(np.median(training_time.values), stats.median_abs_deviation(training_time.values)))
for elem in training_time.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "Training Phase",
        "rt" : elem.rt
    })

# Collecting results for the rule change test phase and calculate median and mad
rule_change_time = rule_change[["id", "rt"]].groupby("id").agg("mean")
print("Time Rule Change:  M={} (MAD={})".format(np.median(rule_change_time.values), stats.median_abs_deviation(rule_change_time.values)))
for elem in rule_change_time.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "Rule Change",
        "rt" : elem.rt
    })

# Collecting results for the new rule (within) test phase and calculate median and mad
new_rule_time = new_rule[["id", "rt"]].groupby("id").agg("mean")
print("Time New Rule:     M={} (MAD={})".format(np.median(new_rule_time.values), stats.median_abs_deviation(new_rule_time.values)))
for elem in new_rule_time.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "New Rule\nWithin division",
        "rt" : elem.rt
    })

# Collecting results for the new rule (across) test phase and calculate median and mad
new_rule_mix_time = new_rule_mix[["id", "rt"]].groupby("id").agg("mean")
print("Time New Rule Mix: M={} (MAD={})".format(np.median(new_rule_mix_time.values), stats.median_abs_deviation(new_rule_mix_time.values)))
for elem in new_rule_mix_time.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "New Rule\nAcross division",
        "rt" : elem.rt
    })

# Compile dataframe for plotting and determine ordering
result_df = pd.DataFrame(results)
order = result_df.groupby("type").agg("mean").sort_values(by="rt", ascending=False).reset_index()["type"]

# Plot times
sns.set_theme(style="whitegrid", palette="colorblind")
colors = [(r,g,b,0.5) for r,g,b in sns.color_palette("colorblind")[:4]]

cmap = {
    "Training Phase" : "C0",
    "Rule Change" : "C1",
    "New Rule\nWithin division" : "C2",
    "New Rule\nAcross division" : "C3"
}

ax = sns.boxplot(x="type", y="rt", data=result_df, order=order, palette=cmap)

for patch in ax.patches:
    r, g, b, a = patch.get_facecolor()
    patch.set_facecolor((r, g, b, .4))

ax = sns.stripplot(x="type", y="rt", data=result_df, size=4, linewidth=0.2, edgecolor="#000", jitter=True, order=order, palette=cmap)
ax.set_xlabel("")
ax.set_ylabel("Response Time (ms)")
plt.tight_layout()
plt.savefig("time.pdf")
plt.show()
