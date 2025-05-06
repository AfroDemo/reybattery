import Database from "better-sqlite3";
import type { Database as DatabaseType } from "better-sqlite3";

interface Order {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  message?: string;
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

let db: DatabaseType | null = null;

function initializeDb() {
  if (!db) {
    db = new Database("orders.db");
    db.exec(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        message TEXT,
        product_id TEXT NOT NULL,
        product_name TEXT NOT NULL,
        product_price REAL NOT NULL,
        quantity INTEGER DEFAULT 1,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email);
      CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
    `);
    db.pragma("journal_mode = WAL");
  }
  return db;
}

export function saveOrder(orderData: Order) {
  const db = initializeDb();
  try {
    const stmt = db.prepare(`
      INSERT INTO orders (
        name, email, phone, address, message,
        product_id, product_name, product_price, quantity
      ) VALUES (
        @name, @email, @phone, @address, @message,
        @product_id, @product_name, @product_price, @quantity
      )
    `);

    return stmt.run({
      ...orderData,
      product_price: orderData.product_price * orderData.quantity, // Store total price
    });
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to save order");
  }
}

export function getOrders(): Order[] {
  const db = initializeDb();
  return db
    .prepare("SELECT * FROM orders ORDER BY created_at DESC")
    .all() as Order[];
}

export function getOrderById(id: number): Order | null {
  const db = initializeDb();
  return db
    .prepare("SELECT * FROM orders WHERE id = ?")
    .get(id) as Order | null;
}

export function updateOrderStatus(id: number, status: string) {
  const db = initializeDb();
  try {
    const stmt = db.prepare(`
      UPDATE orders 
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);
    return stmt.run(status, id);
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to update order status");
  }
}
