export default {
  get: jest.fn().mockImplementation(() => Promise.resolve([])),
  post: jest.fn().mockImplementation(() => Promise.reject("")),
  put: jest.fn()
}