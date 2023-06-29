<?php
namespace com\shoes\handler;

/**
 * Route Definitions
 * (a) GET  https://cars.com/Product.php       // GETS  all products
 * (b) GET  https://cars.com/Product.php/123   // GET   the product 123
 * (c) POST https://cars.com/Product.php       // POST  new product
 * (d) PATCH https://cars.com/Product.php/123  // PATCH edit existing product
 * (e) DELETE https://cars.com/Product.php/122 // DELETE delete product 123
 * 
 */

class ProductHandler extends AbstractHandler {

    /**
     * <p>
     *  Default constructor
     * </p>
     */
    function __construct() {
 
    }
}

?>