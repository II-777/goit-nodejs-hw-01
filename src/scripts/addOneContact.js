import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const existingContacts = await readContacts();
    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(updatedContacts);
    console.log('Successfully added one new contact.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();
