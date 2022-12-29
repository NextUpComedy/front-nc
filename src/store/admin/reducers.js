import {
  getWaitingList,
  getApprovedList,
  getRejectedList,
  getBannedList,
  approveUser,
  rejectUser,
  createUser,
  editUserProfile,
  blockUser,
  getAdminStatistics,
  generateReport,
} from './thunk';

const extraReducers = (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.approvedList.push(action.payload.user);
    })
    .addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getWaitingList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getWaitingList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waitingList = action.payload;
    })
    .addCase(getWaitingList.rejected, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getApprovedList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getApprovedList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.approvedList = action.payload;
    })
    .addCase(getApprovedList.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(getRejectedList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRejectedList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rejectedList = action.payload;
    })
    .addCase(getRejectedList.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(getBannedList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getBannedList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bannedList = action.payload;
    })
    .addCase(getBannedList.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(approveUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(approveUser.fulfilled, (state, action) => {
      let filteredList;
      state.isLoading = false;
      switch (action.payload.status) {
        case 'pending':
          filteredList = state.waitingList.filter(
            (item) => item.id !== action.payload.user.id,
          );
          state.waitingList = filteredList;
          break;
        case 'rejected':
          filteredList = state.rejectedList.filter(
            (item) => item.id !== action.payload.user.id,
          );
          state.rejectedList = filteredList;
          break;
        default:
          break;
      }
      state.approvedList.push(action.payload.user);
    })
    .addCase(approveUser.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(rejectUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(rejectUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const filteredList = state.waitingList.filter(
        (item) => item.id !== action.payload.userInfo.id,
      );
      state.waitingList = filteredList;
      state.rejectedList.push(action.payload.userInfo);
    })
    .addCase(rejectUser.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(blockUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(blockUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const filteredList = state.approvedList.filter(
        (item) => item.id !== action.payload.user.id,
      );
      state.approvedList = filteredList;
      state.bannedList.push(action.payload.user);
    })
    .addCase(blockUser.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(editUserProfile.fulfilled, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getAdminStatistics.pending, (state) => {
      state.isLoading = true;
    })

    .addCase(getAdminStatistics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reports = action.payload.data.reports.rows;
    })
    .addCase(getAdminStatistics.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(generateReport.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(generateReport.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reports.push(action.payload);
    })
    .addCase(generateReport.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });
};

export default extraReducers;
