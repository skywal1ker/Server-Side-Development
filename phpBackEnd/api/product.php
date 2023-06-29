<?php
require ( dirname(__DIR__) . "\handler\Request.class.php");
require ( dirname(__DIR__) . "\security\TokenType.class.php" );
require ( dirname(__DIR__) . "\security\Authentication.class.php" );

/* @see: https://bit.ly/3BNC5fb  */

use com\shoes\handler\Request;
use com\shoes\security\TokenType;
use com\shoes\security\Authentication;

/**
 * Route Definitions (examples of common Use Cases)
 * (a) GET  https://cars.com/Product.php       // GETS  all products
 * (b) GET  https://cars.com/Product.php/123   // GET   the product 123
 * (c) POST https://cars.com/Product.php       // POST  new product
 * (d) PATCH https://cars.com/Product.php/123  // PATCH edit existing product
 * (e) DELETE https://cars.com/Product.php/122 // DELETE delete product 123
 * 
 */

 // @TODO

?>