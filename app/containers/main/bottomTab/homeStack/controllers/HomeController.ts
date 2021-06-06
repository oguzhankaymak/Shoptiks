import {request} from '../../../../../api/Request';

export const getProductsRequest = async () => {
  try {
    const response = await request.get('/getProducts');
    if (response.status === 200 && response?.data) {
      return Promise.resolve({
        statusCode: response.status,
        data: response?.data,
      });
    }
  } catch (error) {
    return Promise.reject({
      statusCode: error.response.statusCode,
      message: error.response.message,
    });
  }
};
