const Child = require('../models/childSchema');
const express = require('express');
const connectDB = require('../config/db')

exports.getAllChildren = async (req, res) => {
  try {
    const children = await Child.find();
    res.json(children);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getChildById = async (req, res) => {
  try {
    const child = await Child.findById(req.params.id);
    if (!child) return res.status(404).json({ message: 'Child not found' });
    res.status(200).json(child);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.AddChild = async (req, res) => {
  const { name, age, story, image } = req.body;
  const newChild = new Child({ name, age, story, image });
  try {
    const child = await newChild.save();
    res.status(201).json(child);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateChild = async (req, res) => {
  try {
    const updated = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Child not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteChild = async (req, res) => {
  try {
    const deleted = await Child.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Child not found' });
    res.status(200).json({ message: 'Child deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.sponsorChild = async (req, res) => {
  try {
    const sponsored = await Child.find({ isSponsored: true });
    if (!sponsored.length) return res.status(404).json({ message: 'No sponsored children found' });
    res.status(200).json(sponsored);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getAvailableChild = async (req, res) => {
  try {
    const children = await Child.find({ isSponsored: false });
    if (!children.length) return res.status(404).json({ message: 'No available children found' });
    res.status(200).json(children);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
