/**
 * @swagger
 *
 * /auth/join:
 *   post:
 *     summary: Join
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: exmaple@emailaddress.com
 *               password:
 *                 type: string
 *                 example: example123
 *               passwordConfirm:
 *                 type: string
 *                 example: example123
 *               nick:
 *                 type: string
 *                 example: exampleNick
 *     responses:
 *       200:
 *         description: Join successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About Result
 *       400:
 *         description: Bad requst
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *       409:
 *         description: Email you input is already Joined 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 * /auth/login:
 *   post:
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: example@emailaddress.com
 *               password:
 *                 type: string
 *                 example: example123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *                 token:
 *                   type: string
 *                   description: JWT Token
 *       400:
 *         description: Bad requst
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *       401:
 *         description: Password is wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *       404:
 *         description: ID you Input dosen't exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result               
 * 
 * /auth/myinfo:
 *   get:
 *     summary: Get myinfo
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: get myinfo successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *                 email:
 *                   type: string
 *                   description: Your email
 *                 nick:
 *                   type: string
 *                   description: Your nick
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *       401:
 *         description: Your Token isn't valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 *       419:
 *         description: Your token is expired
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP Status Code
 *                 message:
 *                   type: string
 *                   description: About result
 */
