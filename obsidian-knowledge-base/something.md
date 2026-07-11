
Based on the provided sources, here is a comprehensive list of key terms, acronyms, and definitions essential for your exam, organized by category.

### Artificial Intelligence & Machine Learning

- **MNIST:** A famous, publicly available dataset consisting of 70,000 grayscale images of handwritten digits (0–9) used for training image processing systems.
- **SHAP (SHapley Additive exPlanations):** A computationally intensive post-hoc explainer used to interpret the outputs of machine learning models (like tree ensembles) by calculating the contribution of each feature to the prediction.
- **CNN (Convolutional Neural Network):** A specialized neural network architecture designed for processing data with a grid-like topology, such as images, by using convolution and pooling layers to recognize patterns.
- **RNN (Recurrent Neural Network):** A type of neural network designed for sequential data (like time series or text) where the output from previous steps is fed as input to the current step.
- **LSTM (Long Short-Term Memory):** An advanced type of RNN that maintains two tracks of hidden-layer activations to prevent early signals from being "washed out" in long sequences.
- **Backpropagation:** The central algorithm for training neural networks, which uses the chain rule to attribute fractions of the prediction error (residual) to each parameter in the network.
- **SGD (Stochastic Gradient Descent):** The state-of-the-art optimization process for deep learning that updates model weights using small "minibatches" of training data rather than the entire dataset at once.
- **Dropout:** A regularization technique that randomly "drops out" (sets to zero) a fraction of neurons during training to prevent the model from becoming over-specialized and overfitting.
- **Activation Functions:** Mathematical functions applied to a neuron's output, such as **ReLU** (Rectified Linear Unit), which thresholds values at zero, or **Softmax**, which turns outputs into probabilities that sum to one.
- **XAI (Explainable AI):** Technologies and methods that allow human users to understand and trust the results and output created by machine learning algorithms.
- **Symbolic AI:** A "classical" AI approach based on human-readable, high-level representations such as rule-based engines and decision trees (e.g., the **Samuel** system).

### Reinforcement Learning (RL)

- **Agent:** The autonomous learner or decision-maker that interacts with the environment.
- **S, A, T, R (The Markov Decision Process Components):**
    - **State (S):** A representation of the environment at a specific time (e.g., technical indicators and holding status).
    - **Action (A):** The choices available to the agent (e.g., Buy, Sell, Hold).
    - **Transition Function (T):** The probability that taking action $A$ in state $S$ will result in state $S'$.
    - **Reward Function (R):** The immediate feedback (scalar value) provided by the environment after an action.
- **Policy ($\pi$):** The agent's strategy; a mapping from states to actions.
- **Q-Learning:** A model-free RL algorithm that learns a **Q-Table**, where each entry $Q(s, a)$ represents the expected future discounted reward for taking a specific action in a specific state.
- **$\alpha$ (Alpha - Learning Rate):** Determines how much new information overrides old knowledge in the Q-update rule.
- **$\gamma$ (Gamma - Discount Rate):** Determines the importance of future rewards compared to immediate ones.
- **Dyna-Q:** An extension of Q-learning that speeds up convergence by using real experiences to build models of $T$ and $R$, then "hallucinating" additional experiences to update the Q-table.
- **Exploration vs. Exploitation:** The tradeoff between trying new actions to discover their value (exploration) and using known high-reward actions (exploitation).
- **Discretization:** The process of converting continuous real-world data (like stock prices) into discrete integers so they can be used as indices in a Q-table.

### Portfolio Management & Finance

- **MVO (Mean-Variance Optimization):** A framework used to find the optimal allocation of assets that achieves a target return while minimizing risk, based on Harry Markowitz's insights on **Covariance**.
- **Efficient Frontier:** A curved line representing the set of optimal portfolios that offer the lowest possible risk for a given level of return.
- **Sharpe Ratio:** A measure of risk-adjusted return, calculated as reward divided by risk (volatility).
- **The Fundamental Law of Active Management:** Relates performance to skill and breadth: $\text{Performance} = \text{Skill} \times \sqrt{\text{Breadth}}$.
    - **IR (Information Ratio):** A measure of a manager's performance relative to a benchmark (Sharpe ratio of excess returns).
    - **IC (Information Coefficient):** A measure of an investor's skill, defined as the correlation between predicted and actual returns.
    - **Breadth (BR):** The number of independent trading opportunities available per year.
- **CAPM (Capital Asset Pricing Model):** A model defining total portfolio return as $R_p = \beta_p R_m + \alpha_p$.
    - **Alpha ($\alpha$):** The portion of return derived from a manager's skill, independent of the market.
    - **Beta ($\beta$):** A measure of an asset's sensitivity to market movements.
- **EMH (Efficient Markets Hypothesis):** The theory that prices reflect all available information, existing in three forms: **Weak** (past prices), **Semi-Strong** (all public info), and **Strong** (all public and private info) [661–664].

### Data & Execution

- **LOB (Limit Order Book):** A record of all outstanding buy and sell limit orders for a security.
- **MBO (Market-By-Order):** Granular data that provides a stream of individual order messages (limit, cancel, modify), allowing for a high-fidelity reconstruction of the LOB.
- **ETL (Extract, Transform, Load):** The general process of moving data from source systems into a unified repository.
- **Triple:** The fundamental unit of a **Knowledge Graph**, consisting of a **Subject**, **Predicate**, and **Object**.
- **TWAP / VWAP:** Execution benchmarks representing **Time-Weighted Average Price** and **Volume-Weighted Average Price**.
- **Slippage:** The difference between the reference price when a trade is initiated and the actual execution price, often caused by market impact.
- **Adjusted Close:** Stock prices that have been adjusted backward to account for **splits** and **dividends**, reflecting the true economic return to the investor.