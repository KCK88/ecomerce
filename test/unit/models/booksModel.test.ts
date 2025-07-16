import { Model } from 'mongoose';
import {booksGet} from "../../../models/bookModel";

jest.mock('mongoose');

jest.mock('mongoose', () => ({
  ...jest.requireActual('mongoose'), // Preserve non-mocked parts
  model: jest.fn().mockReturnValue({
    find: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    exec: jest.fn()
  })
}));

describe('booksGet() with mocked Mongoose', () => {
  const mockExec = jest.fn();
  const mockLimit = jest.fn().mockReturnValue({ exec: mockExec });
  const mockFind = jest.fn().mockReturnValue({ limit: mockLimit });

  beforeEach(() => {
    // 2. Reset all mocks before each test
    jest.clearAllMocks();

    // 3. Setup the mock chain
    (Model as jest.MockedClass<any>).find = mockFind;
    mockFind.mockReturnValue({ limit: mockLimit });
    mockLimit.mockReturnValue({ exec: mockExec });
  });

  it('should call the correct query chain', async () => {
    // 4. Setup mock response
    mockExec.mockResolvedValueOnce([{ title: 'Test Book' }]);

    const result = await booksGet();

    expect(Model.find).toHaveBeenCalled();
    expect(mockLimit).toHaveBeenCalledWith(15);
    expect(mockExec).toHaveBeenCalled();
    expect(result).toEqual([{ title: 'Test Book' }]);
  });

  it('should return an empty array when no books exist', async () => {
    const result = await booksGet();
    expect(result).toEqual([]);
  });

  it('should return books when they exist', async () => {
    const mockBooks = [
      { title: 'Mock Book 1', authors: [], description: 'Desc 1', price: 10, stock: 5, coverImage: 'img1.jpg' },
      { title: 'Mock Book 2', authors: [], description: 'Desc 2', price: 20, stock: 10, coverImage: 'img2.jpg' }
    ];

    mockFind.mockImplementation(() => ({
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockBooks)
    }));

    const result = await booksGet();
    expect(result).toEqual(mockBooks);
    expect(result).toHaveLength(2);
  });

  it('should handle errors', async () => {
    mockFind.mockImplementation(() => ({
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn().mockRejectedValue(new Error('Database error'))
    }));

    await expect(booksGet()).rejects.toThrow('Database error');
  });
});