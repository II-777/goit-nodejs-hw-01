import { readContacts } from './utils/readContacts.js';
import { writeContacts } from './utils/writeContacts.js';

const updateContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Contacts:', contacts);
  } catch (error) {
    console.error('Error during contacts update:', error);
  }
};

updateContacts();
