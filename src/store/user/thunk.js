import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await userService.createUser(userInfo);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await userService.updateUser(userInfo);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const forgetPassword = createAsyncThunk(
  'user/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await userService.forgetPassword(email);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await userService.resetPassword(values);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const createFinancialData = createAsyncThunk(
  'user/createFinancialData',
  async (financialData, { rejectWithValue }) => {
    try {
      const { data } = await userService.createFinancialData(financialData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getFinancialData = createAsyncThunk(
  'user/getFinancialData',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getFinancialStatus();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateFinancialData = createAsyncThunk(
  'user/updateFinancialData',
  async (financialData, { rejectWithValue }) => {
    try {
      const { data } = await userService.updateFinancialData(financialData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await userService.changePassword(values);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getUserContent = createAsyncThunk(
  'user/contents',
  async (paginationData, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUserContent(paginationData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const getUserPayouts = createAsyncThunk(
  'user/payouts',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUserPayouts();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const askForPayout = createAsyncThunk(
  'user/askForPayout',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.askForPayout();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const cancelPayout = createAsyncThunk(
  'user/cancelPayout',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.cancelPayout();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const getStatistics = createAsyncThunk(
  'user/getStatistics',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getStatistics();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
