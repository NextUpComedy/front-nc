import {
  createUser,
  updateUser,
  forgetPassword,
  resetPassword,
  getFinancialData,
  createFinancialData,
  updateFinancialData,
  getUserContent,
  getUserPayouts,
  askForPayout,
  cancelPayout,
} from './thunk';

const extraReducers = (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(forgetPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(forgetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(forgetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(getFinancialData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFinancialData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(getFinancialData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(createFinancialData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createFinancialData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(createFinancialData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(updateFinancialData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateFinancialData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(updateFinancialData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(getUserContent.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUserContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(getUserContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  builder
    .addCase(getUserPayouts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUserPayouts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payouts = action.payload.data.rows;
    })
    .addCase(getUserPayouts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  builder
    .addCase(askForPayout.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(askForPayout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payouts.push(action.payload.data);
    })
    .addCase(askForPayout.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(cancelPayout.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(cancelPayout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payouts = state.payouts.filter((payout) => payout.id !== action.payload.data.id);
    })
    .addCase(cancelPayout.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });
};

export default extraReducers;
