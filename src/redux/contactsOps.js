import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  `contacts/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://67b4c786a9acbdb38ed057c3.mockapi.io/contacts`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `contacts/deleteContact`,
  async (id, thunkAPI) => {
    try {
      await axios.delete(
        `https://67b4c786a9acbdb38ed057c3.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/createContact`,
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://67b4c786a9acbdb38ed057c3.mockapi.io/contacts`,
        contact
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
