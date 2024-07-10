import express from 'express';
import {
  createTracking,
  getTrackings,
  getTrackingById,
  updateTracking,
  deleteTracking
} from '../controllers/trackingController.js';

const router = express.Router();

router.post('/', createTracking);
router.get('/', getTrackings);
router.get('/:id', getTrackingById);
router.put('/:id', updateTracking);
router.delete('/:id', deleteTracking);

export default router;
