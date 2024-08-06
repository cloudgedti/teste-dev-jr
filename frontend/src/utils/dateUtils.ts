import { format } from "date-fns";

export function formatDate(
   dateString: string,
   dateFormat: string = "dd/MM/yyyy HH:mm:ss"
): string {
   return format(new Date(dateString), dateFormat);
}
