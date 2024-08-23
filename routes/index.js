const router = require('express').Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');


router.get('/', homeController.getHomepage);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/dashboard', postController.getDashboard);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost); 
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
