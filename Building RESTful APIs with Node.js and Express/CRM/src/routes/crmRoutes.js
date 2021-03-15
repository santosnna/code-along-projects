/**
 * THIS FILE CONTAINS THE ROUTING TO PERFORM DIFFERENT ACTIONS
 */
import {
  originMiddleware,
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get(
      originMiddleware, // Middleware
      getContacts // GET endpoint
    )
    .post(addNewContact); // POST endpoint

  app
    .route("/contact/:contactID")
    .get(getContactWithID) // Get a specific contact
    .put(updateContact) // Updating a specific contact
    .delete(deleteContact); // Deleting a specific contact
};

export default routes;
