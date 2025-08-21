import axios from 'axios';

const API_URL = "https://newgeneration-production.up.railway.app/api/";

// --- Helper Functions ---

// Gets the authentication token from local storage.
const getAuthToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.token : null;
};

// Creates a config object with the Authorization header for protected routes.
const getAuthConfig = () => {
  const token = getAuthToken();
  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// --- Public Functions ---

/**
 * Fetches all news articles.
 * @returns {Promise<Array>} A promise that resolves to an array of news articles.
 */
export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error.response?.data || error.message);
    return [];
  }
};

/**
 * Fetches all events.
 * @returns {Promise<Array>} A promise that resolves to an array of events.
 */
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error.response?.data || error.message);
    return [];
  }
};

/**
 * Fetches all gallery images.
 * @returns {Promise<Array>} A promise that resolves to an array of gallery items.
 */
export const fetchGallery = async () => {
  try {
    const response = await axios.get(`${API_URL}gallery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery images:", error.response?.data || error.message);
    return [];
  }
};

/**
 * Submits a new admission application.
 * @param {object} formData - The admission application data.
 * @returns {Promise<object>} A promise that resolves to the created admission object.
 */
export const submitAdmission = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}admissions`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Server submission error');
  }
};

/**
 * Submits a contact form.
 * @param {object} formData - The contact form data.
 * @returns {Promise<object>} A promise that resolves to the contact form submission object.
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}contact`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Server submission error");
  }
};

/**
 * Handles administrator login.
 * @param {string} username - The admin username.
 * @param {string} password - The admin password.
 * @returns {Promise<object>} A promise that resolves to the user data upon successful login.
 */
export const adminLogin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Login failed');
  }
};

// --- Protected Admin Functions ---

/**
 * Creates a new news article.
 * @param {object} newsData - The data for the new news article (title, content, imageUrl).
 * @returns {Promise<object>} A promise that resolves to the created news article object.
 */
export const createNews = async (newsData) => {
  try {
    const response = await axios.post(`${API_URL}news`, newsData, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to create news');
  }
};

/**
 * Deletes a news article.
 * @param {string} newsId - The ID of the news article to delete.
 * @returns {Promise<object>} A promise that resolves to a confirmation object.
 */
export const deleteNews = async (newsId) => {
  try {
    const response = await axios.delete(`${API_URL}news/${newsId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to delete news');
  }
};

/**
 * Creates a new event.
 * @param {object} eventData - The data for the new event.
 * @returns {Promise<object>} A promise that resolves to the created event object.
 */
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_URL}events`, eventData, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to create event');
  }
};

/**
 * Deletes an event.
 * @param {string} eventId - The ID of the event to delete.
 * @returns {Promise<object>} A promise that resolves to a confirmation object.
 */
export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`${API_URL}events/${eventId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to delete event');
  }
};

/**
 * Adds a new image to the gallery.
 * @param {object} imageData - The data for the new gallery image (imageUrl, caption).
 * @returns {Promise<object>} A promise that resolves to the created gallery object.
 */
export const addGalleryImage = async (imageData) => {
  try {
    const response = await axios.post(`${API_URL}gallery`, imageData, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to add gallery image');
  }
};

/**
 * Deletes an image from the gallery.
 * @param {string} imageId - The ID of the image to delete.
 * @returns {Promise<object>} A promise that resolves to a confirmation object.
 */
export const deleteGalleryImage = async (imageId) => {
  try {
    const response = await axios.delete(`${API_URL}gallery/${imageId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to delete gallery image');
  }
};

/**
 * Fetches all admission applications for the admin.
 * @returns {Promise<Array>} A promise that resolves to an array of admission applications.
 */
export const getAdmissions = async () => {
  try {
    const response = await axios.get(`${API_URL}admissions`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to fetch admissions');
  }
};

/**
 * Updates the status of an admission application.
 * @param {string} id - The ID of the admission application.
 * @param {string} status - The new status (e.g., 'Pending', 'Approved', 'Rejected').
 * @returns {Promise<object>} A promise that resolves to the updated admission object.
 */
export const updateAdmissionStatus = async (id, status) => {
  try {
    const response = await axios.put(`${API_URL}admissions/${id}`, { status }, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Failed to update admission status');
  }
};


