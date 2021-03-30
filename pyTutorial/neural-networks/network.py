# import sys
import numpy as np


# lesson 1
# a single neuron in a layer receives input and weight from each neuron in the previous layer
# output is sum of inputs times weight + bias        -

# inputs = [1, 2, 3]
# weights = [0.2, 0.8, -0.5]
# bias = 2
#
# output = inputs[0]*weights[0]  + inputs[1]*weights[1] + inputs[2]*weights[2] + bias
# print(output)


# lesson 2
# layer of 3 neurons taking input from layer of 4 neurons - like output layer (3 from 4)

# inputs = [1, 2, 3, 2.5]
# weights1 = [0.2, 0.8, -0.5, 1.0]
# weights2 = [0.5, -0.91, 0.26, -0.5]
# weights3 = [-0.26, -0.27, 0.17, 0.87]
# bias1 = 2
# bias2 = 3
# bias3 = 0.5
#
# output = [
#     inputs[0]*weights1[0] + inputs[1]*weights1[1] + inputs[2]*weights1[2] + inputs[3]*weights1[3] + bias1,
#     inputs[0]*weights2[0] + inputs[1]*weights2[1] + inputs[2]*weights2[2] + inputs[3]*weights2[3] + bias2,
#     inputs[0]*weights3[0] + inputs[1]*weights3[1] + inputs[2]*weights3[2] + inputs[3]*weights3[3] + bias3
# ]
# print(output)


# lesson 3
# same above but with dot product from num py

# inputs = [1, 2, 3, 2.5]
# weights = [
#     [0.2, 0.8, -0.5, 1.0],
#     [0.5, -0.91, 0.26, -0.5],
#     [-0.26, -0.27, 0.17, 0.87]
# ]
# biases = [2, 3, 0.5]
#
# # weights dot inputs
# output = np.dot(weights, inputs) + biases
# print(output)

# lesson 4

# batch of inputs vs single
# avoid shape errors in output - convert weights to numpy array and transpose
# add addtional layer of neurons (weights/biases)

# inputs = [[1, 2, 3, 2.5],
#           [2.0, 5.0, -1.0, 2.0],
#           [-1.5, 2.7, 3.3, -0.8]]
#
# weights = [
#     [0.2, 0.8, -0.5, 1.0],
#     [0.5, -0.91, 0.26, -0.5],
#     [-0.26, -0.27, 0.17, 0.87]
# ]
# biases = [2, 3, 0.5]
#
# weights2 = [
#     [0.1, -0.14, 0.5],
#     [-0.5, 0.12, -0.33],
#     [-0.44, 0.73, -0.13]
# ]
# biases2 = [-1, 2, -0.5]
#
# layer1_outputs = np.dot(inputs, np.array(weights).T) + biases
# layer2_outputs = np.dot(layer1_outputs, np.array(weights2).T) + biases2
# print(layer1_outputs)
# print(layer2_outputs)

#convert above to object >>>
np.random.seed(0)

X = [[1, 2, 3, 2.5],
    [2.0, 5.0, -1.0, 2.0],
    [-1.5, 2.7, 3.3, -0.8]]

class Layer_Dense:
    def __init__(self, n_inputs, n_neurons):
        self.weights = 0.10 * np.random.randn(n_inputs, n_neurons)
        self.biases = np.zeros((1, n_neurons))
    def forward(self, inputs):
        self.output = np.dot(inputs, self.weights) + self.biases

layer1 = Layer_Dense(4, 5)
layer2 = Layer_Dense(5, 8)

layer1.forward(X)
print(layer1.output)
layer2.forward(layer1.output)
print(layer2.output)
