---
dg-publish: true
---
To succeed on the exam regarding neural networks, you should focus on their architectural components, training mechanisms, and their specific applications in reinforcement learning and trading.

---
### 1. Core Architecture and Components
Neural networks are the foundational "machinery" of **Deep Learning**. They are composed of layers of units (neurons) that process information:
*   **Input Layer:** This is where data (such as stock momentum or pixels) enters the network.
*   **Hidden Layers:** These layers compute **activations**, which are nonlinear transformations of linear combinations of inputs. While a single hidden layer can theoretically approximate most functions, modern "deep" networks use multiple layers to simplify the learning task.
*   **Weights and Biases:** "Weights" are the parameters on the edges connecting nodes that the system learns to optimize; important inputs are assigned larger weights. "Biases" (intercepts) are additional parameters that shift the inflection point of activation functions.
*   **Output Layer:** The final processed information is summarized here to provide a prediction, such as a class probability or a specific trading action value.

---

### 2. Key Mathematical Functions
*   **Activation Functions:** These are applied to a neuron's output to introduce nonlinearity.
    *   **ReLU (Rectified Linear Unit):** The modern standard because it is computationally efficient; it thresholds values at zero ($g(z) = \max(0, z)$).
    *   **Sigmoid:** An older standard that squashes values between 0 and 1.
    *   **Softmax:** Specifically used in the output layer for multiclass classification to ensure all predicted probabilities are non-negative and sum to one.
*   **Loss Functions:** These measure prediction error during training.
    *   **Squared-error loss** is used for regression (quantitative responses).
    *   **Cross-entropy** (negative multinomial log-likelihood) is used for classification (qualitative responses).

---
### 3. Training and Optimization
*   **Backpropagation:** This is the central algorithm for training. It uses the **chain rule** of differentiation to attribute fractions of the total prediction error back to each individual weight in the network.
*   **Stochastic Gradient Descent (SGD):** The state-of-the-art optimization process that updates model weights using small **minibatches** of training data (e.g., 128 observations) rather than the entire dataset at once to accelerate the process.
*   **Epoch:** A single pass through the entire training dataset.

---
### 4. Overfitting and Regularization
Because neural networks often have more parameters than training observations, they are highly prone to overfitting. Key prevention techniques include:
*   **Ridge/Lasso Regularization:** Imposing penalties on the size of the weights.
*   **Dropout:** A technique where a fraction of neurons is randomly "dropped" (set to zero) during each training pass, preventing the model from becoming over-specialized.
*   **Early Stopping:** Halting the training process once the error on a validation set begins to increase, even if the training error is still decreasing.
*   **Data Augmentation:** Artificially expanding the training set by creating distorted replicates of data (e.g., rotating or flipping images).

---
### 5. Specialized Architectures
*   **CNN (Convolutional Neural Network):** Designed for data with a grid-like topology, such as images. They use **convolution filters** to recognize local patterns (edges, shapes) and **pooling layers** (like max pooling) to condense the image and provide location invariance.
*   **RNN (Recurrent Neural Network):** Tailored for sequential data like time series or text. They maintain a "memory" by using the output from a previous step as input for the current step.
*   **LSTM (Long Short-Term Memory):** An advanced RNN that maintains two tracks of hidden-layer activations to prevent early signals in long sequences from being "washed out" or forgotten.
---
### 6. Neural Networks in Trading
*   **Integration with Reinforcement Learning:** In a **Deep RL** framework, neural networks replace the traditional **Q-table** to handle continuous or high-dimensional state spaces.
*   **Action Selection:** A common approach is to create **individual neural networks for each action** (e.g., buy, sell, hold), injecting the state into each and selecting the one with the highest output value.
*   **State Representation:** You must use features that **generalize** across different price regimes. Using **raw Adjusted Close prices is considered "bad"** because they are non-stationary; instead, use **ratios** (like Price/SMA) or relative indicators.
*   **The "Black Box" Challenge:** The sources warn that neural networks are essentially black boxes that can be fragile. According to the **Occam's razor** principle, if a simpler tool (like linear regression or a decision tree) performs as well as a neural network, you should choose the simpler model for its interpretability.
---
### 7. Key Phenomena to Know
*   **MNIST:** A standard dataset of 70,000 grayscale images of handwritten digits (0-9) used to benchmark classifiers.
*   **Double Descent:** A phenomenon where, in over-parameterized models, the test error initially follows a U-shape but then **descends a second time** after passing the "interpolation threshold" where training error is zero.
*   **SHAP (SHapley Additive exPlanations):** A computationally intensive tool used to provide **Explainable AI (XAI)** by calculating how much each feature contributed to a specific prediction.