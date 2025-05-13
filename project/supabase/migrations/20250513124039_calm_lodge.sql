/*
  # Add Sample Products

  1. Changes
    - Insert sample products for women's clothing
    - Insert sample products for children's clothing
    - All products include name, description, price, category, and image URL
*/

INSERT INTO products (name, description, price, category, image_url) VALUES
-- Women's clothing
('Floral Summer Dress', 'Beautiful floral print dress perfect for summer days', 79.99, 'women', 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg'),
('Classic Denim Jacket', 'Versatile denim jacket that goes with everything', 89.99, 'women', 'https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg'),
('Elegant Evening Gown', 'Stunning black evening gown for special occasions', 199.99, 'women', 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg'),
('Casual White Blouse', 'Comfortable and stylish white blouse for everyday wear', 45.99, 'women', 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg'),
('High-Waist Jeans', 'Classic high-waist jeans with perfect fit', 69.99, 'women', 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg'),

-- Children's clothing
('Colorful T-Shirt Set', 'Set of 3 comfortable cotton t-shirts in bright colors', 29.99, 'children', 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg'),
('Princess Party Dress', 'Adorable party dress with tulle skirt', 49.99, 'children', 'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg'),
('Denim Overall Set', 'Cute denim overalls with matching t-shirt', 39.99, 'children', 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg'),
('Winter Jacket', 'Warm and cozy winter jacket for kids', 59.99, 'children', 'https://images.pexels.com/photos/5693890/pexels-photo-5693890.jpeg'),
('Summer Play Set', 'Comfortable cotton play set for warm days', 34.99, 'children', 'https://images.pexels.com/photos/5693891/pexels-photo-5693891.jpeg');