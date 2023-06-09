import { Router } from 'express';
import { JoiValidation, validateAuth } from '../middlewares';
import { getFriendList, sendFriendRequest, getFriendRequests, acceptFriendRequest } from '../controllers';
import { friendIdSchema, friendRequestSchema } from '../utils/schemas';

const friendRouter = Router();

friendRouter
  .use(validateAuth)
  .get('/friendlist', getFriendList)
  .get('/friendrequest', getFriendRequests)
  .post('/friendrequest', JoiValidation(friendIdSchema, 'body'), sendFriendRequest)
  .post('/acceptfriend', JoiValidation(friendRequestSchema, 'body'), acceptFriendRequest);

export { friendRouter };
