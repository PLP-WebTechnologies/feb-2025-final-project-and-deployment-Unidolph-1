/*
  # E-commerce Schema Setup

  1. New Tables
    - products
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - category (text)
      - image_url (text)
      - created_at (timestamp)
    
    - cart_items
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - product_id (uuid, foreign key)
      - quantity (integer)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  category text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  product_id uuid REFERENCES products NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can view their own cart items"
  ON cart_items
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own cart items"
  ON cart_items
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items"
  ON cart_items
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items"
  ON cart_items
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);