import pandas as pd
import numpy as np
import json
from scipy import stats
from matplotlib import pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv("../data/rulebased_cat_brand_2022.csv")

# Filter dataset by respective condition
rule_change = df[df["rules_set"] == "ruleset2c"]

# Task labels
decoy_name = "Baseline"
old_rule = "Old"
new_rule = "New"

consensus = "Consensus"

conflict_old = "Conflict\n(Old)"
conflict_new = "Conflict\n(New)"

# Compile correctness information for training 
results_new_rule = []
training_data = df[df["rules_set"] == "ruleset1"]
training_data = training_data[training_data["id"].isin(np.unique(rule_change["id"]))]
training_by_task = training_data[["id", "correctness"]].groupby(["id"])
for idx, data in training_by_task:
    correctness = np.mean(data["correctness"])
    results_new_rule.append({
        "id" : idx,
        "task" : "Training",
        "correctness" : correctness
    })

# Compile correctness information for new change 
new_rule_by_task = rule_change[["id", "correctness", "item_name"]].groupby(["id", "item_name"])
for idx, data in new_rule_by_task:
    p_id, item_name = idx
    
    corr = data["correctness"].mean()

    item_name = item_name.replace("decoy", decoy_name)
    item_name = item_name.replace("test_memory_p1", old_rule).replace("test_memory_p4", old_rule)
    item_name = item_name.replace("test_learning_p1", new_rule).replace("test_learning_p4", new_rule)
    item_name = item_name.replace("upper_bound_p1", consensus).replace("upper_bound_old_p4", consensus).replace("upper_bound_new_p4", consensus)
    item_name = item_name.replace("interference_old_p1", conflict_old).replace("interference_old_p4", conflict_old)
    item_name = item_name.replace("interference_new_p1", conflict_new).replace("interference_new_p4", conflict_new)
    
    results_new_rule.append({
        "id" : p_id,
        "task" : item_name,
        "correctness" : corr
    })

# Create result df for plotting and determine ordering
results_new_rule_df = pd.DataFrame(results_new_rule)
order = results_new_rule_df.groupby("task").agg("mean").sort_values(by="correctness").reset_index()["task"]

# Plot
plt.figure(figsize=(7,4))
sns.set_theme(style="whitegrid", palette="colorblind")
ax = sns.barplot(x="task", y="correctness", palette=["C0" if x == decoy_name or x == "Training" else "C2" for x in order], data=results_new_rule_df, order=order)

ax.set_title("New Rule (across divisions)", fontsize=14)
ax.set_xticklabels(order, fontsize=13)
ax.set_xlabel("")
ax.set_ylabel("")
plt.ylim(0, 1)

plt.tight_layout()
plt.savefig("new_rule_acrossgroup_corr.pdf")
plt.show()
