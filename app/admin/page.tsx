import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { getOrders, updateOrderStatus } from "../../lib/db";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CheckCircle2, Phone, Mail } from "lucide-react";

export default function AdminPage() {
  const orders = getOrders();

  const handleMarkAsContacted = (orderId: number) => {
    updateOrderStatus(orderId, "contacted");
    // In a real app, you might want to refresh the data here
    // For now, we'll just reload the page to see changes
    window.location.reload();
  };

  const handleMarkAsCompleted = (orderId: number) => {
    updateOrderStatus(orderId, "completed");
    window.location.reload();
  };

  const handleSendEmail = (email: string) => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handleCallCustomer = (phone: string) => {
    window.open(`tel:${phone}`, "_blank");
  };

  return (
    <div className="container m-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Order Submissions</h1>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  {format(
                    new Date(order.created_at ?? new Date()),
                    "MMM d, yyyy HH:mm"
                  )}
                </TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSendEmail(order.email)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {order.email}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCallCustomer(order.phone)}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {order.phone}
                  </Button>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {order.address}
                </TableCell>
                <TableCell>{order.product_name}</TableCell>
                <TableCell className="text-right">
                  TzS {order.product_price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "completed"
                        ? "default"
                        : order.status === "contacted"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {order.status || "pending"}
                  </Badge>
                </TableCell>
                <TableCell className="space-x-2">
                  {order.status !== "contacted" &&
                    order.status !== "completed" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMarkAsContacted(order.id!)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Mark Contacted
                      </Button>
                    )}
                  {order.status === "contacted" && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleMarkAsCompleted(order.id!)}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Mark Completed
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {orders.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="text-center text-muted-foreground"
                >
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
