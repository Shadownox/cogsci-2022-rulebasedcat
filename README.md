# cogsci-2022-rulebased-categorization
Companion repository for the 2022 article "Rule-Based Categorization: Measuring the Cognitive Costs of Intentional Rule Updating" published in the proceedings of the 44rd Annual Meeting of the Cognitive Science Society.

## Overview

- `analysis`: Contains the scripts for performing the analyses and generating the plots.
- `analysis/new_rule_acrossgroup.py`: Plotting script for the Figure 4 subplot for the new rule performance across divisions
- `analysis/new_rule_ingroup.py`: Plotting script for the Figure 4 subplot for the new rule performance within divisions
- `analysis/rule_change.py`: Plotting script for the Figure 4 subplot for the rule change performance
- `analysis/time_plot.py`: Plots the reponse times for all conditions and prints median and mad.
- `analysis/total_performance.py`: Plots the performance for all conditions and prints median and mad.
- `data`: Contains the dataset obtained from the study conducted.
- `data/rulebased_cat_brand_2022.csv`: 2022 dataset obtained from the study.
- `materials`: Contains the images used to create the stimuli and the task specifications used.
- `materials/images`: Contains the images used to create the stimuli.
- `materials/tasks`: Task specifications for the conditions as a JSON format 

## Dependencies

- Python 3
    - CCOBRA
    - pandas
    - numpy
    - seaborn

## Run the scripts

All scripts can be run without any arguments. To run a specific script, use:

```
cd /path/to/repository/analysis
$> python [script].py
```

The plots are then saved in the same directory.




