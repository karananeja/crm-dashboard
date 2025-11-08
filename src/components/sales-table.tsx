import { Calendar } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Sale, salesData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function SalesTable() {
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;
  const totalPages = Math.ceil(salesData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = salesData.slice(startIndex, endIndex);

  const getStatusBadge = (status: Sale["status"]) => {
    const variants = {
      shipped: "shipped" as const,
      processing: "processing" as const,
      cancelled: "cancelled" as const,
    };

    return (
      <Badge
        variant={variants[status]}
        className="rounded- rounded-lg w-20 h-10"
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="px-6 py-2 pt-6">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-semibold text-gray-900 text-lg">Latest sales</h3>
          <div className="flex items-center gap-2">
            <Button
              className={cn(
                "bg-white hover:bg-gray-200 border w-20 text-black",
                selectedPeriod !== "day" && "border-none text-gray-500"
              )}
              onClick={() => setSelectedPeriod("day")}
            >
              Day
            </Button>

            <Button
              className={cn(
                "bg-white hover:bg-gray-200 border w-20 text-black",
                selectedPeriod !== "week" && "border-none text-gray-500"
              )}
              onClick={() => setSelectedPeriod("week")}
            >
              Week
            </Button>

            <Button
              className={cn(
                "bg-white hover:bg-gray-200 border w-20 text-black",
                selectedPeriod !== "month" && "border-none text-gray-500"
              )}
              onClick={() => setSelectedPeriod("month")}
            >
              Month
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Calendar"
              className="bg-gray-200"
            >
              <Calendar />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6 h-[61vh]">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 border-none">
                <TableHead className="py-4">Product</TableHead>
                <TableHead className="py-4">Customer</TableHead>
                <TableHead className="py-4">Delivery</TableHead>
                <TableHead className="py-4">Subtotal</TableHead>
                <TableHead className="py-4">Shipping</TableHead>
                <TableHead className="py-4">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((sale) => (
                <TableRow key={sale.id} className="border-none">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-200 rounded size-10 shrink-0" />
                      <div>
                        <p className="font-medium">{sale.product.name}</p>
                        <p className="text-gray-500 text-sm">
                          ID {sale.product.id}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div>
                      <p className="font-medium">{sale.customer.name}</p>
                      <p className="text-gray-500 text-sm">
                        {sale.customer.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex justify-between items-center pr-10">
                      <div>
                        <p className="font-medium">{sale.delivery.country}</p>
                        <p className="text-gray-500 text-sm">
                          {sale.delivery.address}
                        </p>
                      </div>
                      {getStatusBadge(sale.status)}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 font-medium">
                    {sale.subtotal}
                  </TableCell>
                  <TableCell className="py-4 font-medium">
                    {sale.shipping}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{sale.total}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center gap-4 mt-4 px-6 pb-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            &lt; PREV
          </Button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                variant="outline"
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "relative bg-gray-100 hover:bg-[#c6c8fb]/20 border-none text-gray-500 hover:text-[#c6c8fb]",
                  currentPage === page &&
                    "border-[#c6c8fb] text-[#c6c8fb] bg-[#c6c8fb]/20"
                )}
              >
                {page}

                {currentPage === page && (
                  <span className="right-0 -bottom-2 absolute border border-[#c6c8fb] w-full text-sm" />
                )}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            NEXT &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
