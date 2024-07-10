import express from 'express';
import {
  createCourier,
  getCouriers,
  getCourierById,
  updateCourier,
  deleteCourier
} from '../controllers/courierController.js';

const router = express.Router();

router.post('/', createCourier);
router.get('/', getCouriers);
router.get('/:id', getCourierById);
router.put('/:id', updateCourier);
router.delete('/:id', deleteCourier);

export default router;
