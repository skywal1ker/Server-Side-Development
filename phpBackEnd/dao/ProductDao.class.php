<?php
namespace com\shoes\dao;

use com\shoes\service\AbstractService;
require ( dirname(__DIR__) . "\dao\AbstractDao.abstract.php");

/**
 * Defines the API used for database operations
 * related to the Product Domain entity.
 * 
 * @version 1.0
 * @author Andrew Sheehan <asheehan@bu.edu>
 */

class ProductDao extends AbstractDao {

    /**
     * <p>Default constructor</p>
     */
    function __construct() {
    
    }

    /**
     * Gets a product record by its ID
     * 
     * @return Product A product record
     */
    public function getProductBy($Id) : Product {
        // @TODO
    }

    /** 
     * Gets all Products
     * 
     * @return Product[] An array of Product records
     */
    public function getProducts() {
        // @TODO
    }

    /** 
     * Updates a Product 
     * 
     * @param Product A product to update
     * @return The newly updated Product
    */
    public function updateProduct(Product $product) : Product {
        // @TODO
        return Null;
    }
}

?>