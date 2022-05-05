import pandas as pd
import numpy as np
import json
from scipy import stats
from matplotlib import pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv("../data/rulebased_cat_brand_2022.csv")

# Separate by conditions and phase
training_phase = df[df["rules_set"] == "ruleset1"]
rule_change = df[df["rules_set"] == "ruleset2a"]
new_rule = df[df["rules_set"] == "ruleset2b"]
new_rule_mix = df[df["rules_set"] == "ruleset2c"]

# Print number of participants for each phase
print("Training:     {}".format(len(np.unique(training_phase["id"]))))
print("Rule Change:  {}".format(len(np.unique(rule_change["id"]))))
print("New Rule:     {}".format(len(np.unique(new_rule["id"]))))
print("New Rule Mix: {}".format(len(np.unique(new_rule_mix["id"]))))

# Collecting results for the training phase and calculate median and mad
results = []
training_correctness = training_phase[["id", "correctness"]].groupby("id").agg("mean")
print("Correctness Training:     M={} (MAD={})".format(np.median(training_correctness.values), stats.median_abs_deviation(training_correctness.values)))
for elem in training_correctness.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "Training Phase",
        "correct" : elem.correctness
    })

# Collecting results for the rule change test phase and calculate median and mad
rule_change_correctness = rule_change[["id", "correctness"]].groupby("id").agg("mean")
print("Correctness Rule Change:  M={} (MAD={})".format(np.median(rule_change_correctness.values), stats.median_abs_deviation(rule_change_correctness.values)))
for elem in rule_change_correctness.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "Rule Change",
        "correct" : elem.correctness
    })

# Collecting results for the new rule (within) test phase and calculate median and mad
new_rule_correctness = new_rule[["id", "correctness"]].groupby("id").agg("mean")
print("Correctness New Rule:     M={} (MAD={})".format(np.median(new_rule_correctness.values), stats.median_abs_deviation(new_rule_correctness.values)))
for elem in new_rule_correctness.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "New Rule\nWithin division",
        "correct" : elem.correctness
    })

# Collecting results for the new rule (across) test phase and calculate median and mad
new_rule_mix_correctness = new_rule_mix[["id", "correctness"]].groupby("id").agg("mean")
print("Correctness New Rule Mix: M={} (MAD={})".format(np.median(new_rule_mix_correctness.values), stats.median_abs_deviation(new_rule_mix_correctness.values)))
for elem in new_rule_mix_correctness.itertuples():
    results.append({
        "id" : elem.Index,
        "type" : "New Rule\nAcross division",
        "correct" : elem.correctness
    })



# Compile dataframe for plotting and determine ordering
result_df = pd.DataFrame(results)
order = result_df.groupby("type").agg("mean").sort_values(by="correct", ascending=False).reset_index()["type"]

# Plot
sns.set_theme(style="whitegrid", palette="colorblind")

cmap = {
    "Training Phase" : "C0",
    "Rule Change" : "C1",
    "New Rule\nWithin division" : "C2",
    "New Rule\nAcross division" : "C3"
}

ax = sns.boxplot(x="type", y="correct", data=result_df, order=order, palette=cmap)

for patch in ax.patches:
    r, g, b, a = patch.get_facecolor()
    patch.set_facecolor((r, g, b, .4))

ax = sns.stripplot(x="type", y="correct", data=result_df, size=4, linewidth=0.2, edgecolor="#000", jitter=True, order=order, palette=cmap)
ax.set_xlabel("")
ax.set_ylabel("Correctness")
plt.tight_layout()
plt.savefig("correctness.pdf")
plt.show()
