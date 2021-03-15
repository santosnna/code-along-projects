/**
 * THIS FILE CONTAINS THE FUNCTIONS USED TO PERSIST DATA TO MONGODB
 */
import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

/**
 * This function prints the origin of the request
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const originMiddleware = (req, res, next) => {
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  next();
};

/**
 * This function will add a new contact to the database
 * @param {*} req
 * @param {*} res
 */
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

/**
 * This function will pull all data from database
 * @param {*} req
 * @param {*} res
 */
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

/**
 * This function will pull a contact by the id passed as a parameter
 * @param {*} req
 * @param {*} res
 */
export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

/**
 * This function will update a contact in the database
 * @param {*} req
 * @param {*} res
 */
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

/**
 * This function will delete a contact specified by its id
 * @param {*} req
 * @param {*} res
 */
export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted contact" });
  });
};
