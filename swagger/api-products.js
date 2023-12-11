/**
 * @swagger
 * /product/all:
 *   get:
 *     summary: Search all products
 *     parameters:
 *       - in: query
 *         name: sort
 *         type: string
 *         required: false
 *         example: 'desc'
 *     responses:
 *       200:
 *         description: Successful get all products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 123
 *                       product_name:
 *                         type: string
 *                         example: 'forExample'
 *                       content:
 *                         type: string
 *                         example: 'forExampleContent'
 *                       is_soldout:
 *                         type: boolean
 *                         example: false
 *                       created_at:
 *                         type: string
 *                         example: '2023-12-10T08:28:28.000Z'
 *                       user:
 *                         type: object
 *                         properties:
 *                           nick:
 *                             type: string
 *                             example: 'example'
 *                           email:
 *                             type: string
 *                             example: 'example@emailaddress.com'
 * 
 * /product/{findbyproductId}:
 *   get:
 *     summary: Search product by Id
 *     parameters:
 *       - in: path
 *         name: findbyproductId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 11
 *     responses:
 *       200:
 *         description: Successful Search a product by Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 11
 *                     product_name:
 *                       type: string
 *                       example: 'forExample'
 *                     content:
 *                       type: string
 *                       example: 'forExampleContent'
 *                     is_soldout:
 *                       type: boolean
 *                       example: false
 *                     created_at:
 *                       type: string
 *                       example: '2023-12-10T08:28:28.000Z'
 *                     user:
 *                       type: object
 *                       properties:
 *                         nick:
 *                           type: string
 *                           example: 'example'
 *                         email:
 *                           type: string
 *                           example: 'example@emailaddress.com'
 *       404:
 *         description: can't find product with Id you input
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
 * /product/{deleteproductbyId}:
 *   delete:
 *     summary: Search product by Id
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deleteproductbyId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 11
 *     responses:
 *       200:
 *         description: Successful delete a product by Id
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
 *       401:
 *         description: You don't have authorization
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
 *       404:
 *         description: can't find product with Id you input
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
 * /product:
 *   post:
 *     summary: Search product by Id
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_name:
 *                 type: string
 *                 example: 'Example ProductName'
 *               content:
 *                 type: string
 *                 example: 'Example ProductContent'
 *     responses:
 *       200:
 *         description: Successful delete a product by Id
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
 *                   description: About Result
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
 * /product/{patchproductbyId}:
 *   patch:
 *     summary: patch product by Id
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               is_soldout:
 *                 type: boolean
 *               product_name:
 *                 type: string
 *               content:
 *                 type: string
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: patchproductbyId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 11
 *     responses:
 *       200:
 *         description: Successful patch a product with Id
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
 *         description: You don't have authorization
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
 *       404:
 *         description: can't find product with Id you input
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