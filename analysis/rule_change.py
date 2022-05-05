import pandas as pd
import numpy as np
import json
from scipy import stats
from matplotlib import pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv("../data/rulebased_cat_brand_2022.csv")

# Filter dataset by respective condition
rule_change = df[df["rules_set"] == "ruleset2a"]

# Task labels
decoy_name = "Baseline"
interference_conflict_name  = "Conflict"
interference_consensus_name = "Consensus"
changed_rule_name = "Updated Rule"

# Compile correctness information for training 
results_rule_change = []
training_data = df[df["rules_set"] == "ruleset1"]
training_data = training_data[training_data["id"].isin(np.unique(rule_change["id"]))]
training_by_task = training_data[["id", "correctness"]].groupby(["id"])
for idx, data in training_by_task:
    correctness = np.mean(data["correctness"])
    results_rule_change.append({
        "id" : idx,
        "task" : "Training",
        "correctness" : correctness
    })

# Compile correctness information for rule change 
rule_change_by_task = rule_change[["id", "correctness", "item_name"]].groupby(["id", "item_name"])
for idx, data in rule_change_by_task:
    p_id, item_name = idx

    correctness = np.mean(data["correctness"])
    
    item_name = item_name.replace("upper_bound_p1", interference_consensus_name).replace("upper_bound_p2", interference_consensus_name)
    item_name = item_name.replace("test_learning_p1", changed_rule_name).replace("test_learning_p2", changed_rule_name)
    item_name = item_name.replace("decoy", decoy_name)
    item_name = item_name.replace("interference_p1", interference_conflict_name).replace("interference_p2", interference_conflict_name)
    
    results_rule_change.append({
        "id" : p_id,
        "task" : item_name,
        "correctness" : correctness
    })
    
# Create result df for plotting and determine ordering
results_rule_change_df = pd.DataFrame(results_rule_change)
order = results_rule_change_df.groupby("task").agg("mean").sort_values(by="correctness").reset_index()["task"]

# Plot
plt.figure(figsize=(7,4))
sns.set_theme(style="whitegrid", palette="colorblind")
ax = sns.barplot(x="task", y="correctness", palette=["C0" if x == decoy_name or x == "Training" else "C2" for x in order], data=results_rule_change_df, order=order)

ax.set_title("Rule Changes", fontsize=14)
ax.set_xlabel("")
ax.set_xticklabels(order, fontsize=13)
ax.set_ylabel("Correctness", fontsize=14)

plt.ylim(0, 1)

plt.tight_layout()
plt.savefig("change_rule_corr.pdf")
plt.show()
