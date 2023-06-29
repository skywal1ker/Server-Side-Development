<?php
namespace com\shoes\domain;

use com\shoes\domain\JsonFormat;

require ( dirname(__DIR__) . "\domain\BaseEntity.abstract.php");
require ( dirname(__DIR__) . "\domain\JsonFormat.interface.php");

class Product extends BaseEntity implements JsonFormat {
    /**
     * <p>Default constructor</p>
     */
    function __construct() {
    
    }

    /**
     * Overrides BaseEntity::toString()
     */
    public function toString() : string {
        return "Product.domain.php";
    }
}
?>