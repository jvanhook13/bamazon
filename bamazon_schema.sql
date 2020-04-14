CREATE DATABASE Bamazon ;

USE Bamazon ;


CREATE TABLE products(

	prodID INT NOT NULL AUTO_INCREMENT, 
    prodName VARCHAR(75) NOT NULL,
    depName VARCHAR(75) NOT NULL,
    price FLOAT(10) , 
    quantity INT NOT NULL ,
    PRIMARY KEY(prodID)
    

) ; 

INSERT INTO products VALUE(prodID, prodName, depName, price, quantity) ;

INSERT INTO products VALUE( prodID , "Toilet_Paper"  , "Paper", "100000" , "0") ;

INSERT INTO products VALUE( prodID , "Marborlo Gold"  , "Tobacco", "7" , "600") ;

INSERT INTO products VALUE( prodID , "Crown_Royal"  , "Liquor", "25" , "125") ;

INSERT INTO products VALUE( prodID , "Milk"  , "Dairy", "4" , "180") ;

INSERT INTO products VALUE( prodID , "Eggs"  , "Dairy", "2" , "180") ;

INSERT INTO products VALUE( prodID , "Bread"  , "Bread_Dep", "2.50" , "180") ;

INSERT INTO products VALUE( prodID , "Moscato"  , "Liquor", "12" , "125") ;

INSERT INTO products VALUE( prodID , "Oreos_Double_Stuf"  , "Snacks", "3" , "100") ;

INSERT INTO products VALUE( prodID , "Brita_Pitcher"  , "Household", "25" , "99999") ;

INSERT INTO products VALUE( prodID , "Bottled_Water"  , "Beverages", "10000" , "0") ;

SELECT * FROM products
