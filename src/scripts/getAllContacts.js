import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
    throw error;
  }
};

(async () => {
  try {
    console.log(await getAllContacts());
  } catch (error) {
    console.error('Error in getAllContacts script:', error);
  }
})();
