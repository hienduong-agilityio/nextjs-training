// Services
import { apiRequest } from '@/services';

// Constants
import { HTTP_METHODS } from '@/constants';

global.fetch = jest.fn();

describe('apiRequest', () => {
  const mockUrl = 'https://example.com/api';
  const mockResponse = { data: 'success' };
  const mockErrorResponse = { error: { message: 'Something went wrong' } };

  type ApiResponse = typeof mockResponse | typeof mockErrorResponse;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setupFetchMock = (ok: boolean, response: ApiResponse) => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok,
      json: jest.fn().mockResolvedValueOnce(response),
    });
  };

  it.each([
    [HTTP_METHODS.GET, undefined],
    [HTTP_METHODS.POST, { key: 'value' }],
    [HTTP_METHODS.PUT, { key: 'updatedValue' }],
  ])('sends a %s request and returns the response', async (method, data) => {
    setupFetchMock(true, mockResponse);

    const result = await apiRequest({
      url: mockUrl,
      method,
      data,
    });

    expect(fetch).toHaveBeenCalledWith(mockUrl, {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...(data && { body: JSON.stringify(data) }),
    });
    expect(result).toEqual(mockResponse);
  });
});
