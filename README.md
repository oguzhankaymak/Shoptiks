# Shoptiks

<!-- Contents -->

- [About Project](#about-project)
  - [Purpose Of Project](#purpose-of-project)
  - [API](#api)
- [Installation](#installation)
  - [Usage](#usage)
- [Test](#test)

## About Project

| Some Packages / Libraries     | Version |
| -------------------------     | ------- |
| react-native                  | 0.64.1  |
| react                         | 17.0.1  |
| redux                         | 4.1.0   |
| redux-thunk                   | 2.3.0   |
| typescript                    | 4.3.2   |
| @testing-library/react-native | 7.2.0   |

### Purpose Of Project
The user can perform the following actions:
- Able to display product list and product detail
- Able to cart operations (product add, product delete and complete order)
- Able to display last orders
- Able to contact us 

So Shoptiks is a simple shopping application.

### API

- I created fake api for products data. Please check the [endpoint](https://mobile-shopiks.herokuapp.com/getProducts)

## Installation

1. Clone the repository.

```sh
git clone https://github.com/oguzhankaymak/Shoptiks.git
```

2. Install necessary packages via yarn.

```sh
yarn install
```

3. Run the app.

```sh
npx react-native run-android
```
  or

```sh
cd ios && pod install && cd ..
npx react-native run-ios
```

### Usage

Login: You can enter any valid email and random password.

## Test

![CI](https://github.com/oguzhankaymak/Shoptiks/actions/workflows/main.yml/badge.svg)

```sh
yarn run test
```



