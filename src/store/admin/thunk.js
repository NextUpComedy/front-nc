import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { adminService } from 'services';
import { USER_STATUS } from 'shared/constants';

export const modifiedResponse = (res) => res.data
  .map((item) => ({ ...item, key: nanoid() })) // generate unique key for each item
  .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)); // newest first

export const getWaitingList = createAsyncThunk(
  'admin/getWaitingList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getWaitingList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getApprovedList = createAsyncThunk(
  'admin/getApprovedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getApprovedList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getRejectedList = createAsyncThunk(
  'admin/getRejectedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getRejectedList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getBannedList = createAsyncThunk(
  'admin/getBannedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getBannedList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const approveUser = createAsyncThunk(
  'admin/approveUser',
  async (user, { rejectWithValue }) => {
    const status = USER_STATUS[user.userStatusId];
    try {
      const { data } = await adminService.approveUser(user.id);
      return { message: data.message, user, status };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const createUser = createAsyncThunk(
  'admin/createUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.createUser(user);
      // TODO: we should be extracting user from data.user coming from backend:
      return { message: data.message, user };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateDashboardSettings = createAsyncThunk(
  'admin/updateDashboardSettings',
  async (settings, { rejectWithValue }) => {
    try {
      const { data } = await adminService.updateDashboardSettings(settings);
      return { message: data.message, settings };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const geteDashboardSettings = createAsyncThunk(
  'admin/geteDashboardSettings',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.geteDashboardSettings();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const editUserProfile = createAsyncThunk(
  'admin/editUserProfile',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await adminService.editUserProfile(userInfo);
      return { message: data.message, userInfo };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getUserProfile = createAsyncThunk(
  'admin/getUserProfile',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getUserProfile(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getAdminStatistics = createAsyncThunk(
  'admin/getAdminStatistics',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await
      adminService.getAdminStatistics(payload.dataRange[0], payload.dataRange[1]);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getUserStatistics = createAsyncThunk(
  'admin/getUserStatistics',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getUserStatistics(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const rejectUser = createAsyncThunk(
  'admin/rejectUser',
  async (payload, { rejectWithValue }) => {
    try {
      const { userInfo, rejectionReason } = payload;
      const { data } = await adminService.rejectUser(userInfo.id, rejectionReason);
      return { message: data.message, userInfo };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const blockUser = createAsyncThunk(
  'admin/blockUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.blockUser(user.id);
      return { message: data.message, user };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getAdminPayouts = createAsyncThunk(
  'admin/getAdminPayouts',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getAdminPayouts();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const acceptPayout = createAsyncThunk(
  'admin/acceptPayout',
  async (payout, { rejectWithValue }) => {
    try {
      const { data } = await adminService.acceptPayout(payout.id);
      return { message: data.message, payout };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const rejectPayout = createAsyncThunk(
  'admin/rejectPayout',
  async (payload, { rejectWithValue }) => {
    try {
      const { payoutInfo, rejectionReason } = payload;
      const { data } = await adminService.rejectPayout(payoutInfo.id, rejectionReason);
      return { message: data.message, payoutInfo };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const addStripeAccount = createAsyncThunk(
  'admin/addStripeAccount',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await adminService.addStripeAccount(payload);
      return { message: data.message, userInfo: payload };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const generateReport = createAsyncThunk(
  'admin/generateReport',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await adminService.generateReport(payload);
      return { message: data.message, report: data.report };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
