import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw error;
  }
};

(async () => {
  try {
    console.log(await countContacts());
  } catch (error) {
    console.error('Error in countContacts script:', error);
  }
})();
