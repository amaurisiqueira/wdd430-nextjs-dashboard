import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
  
 
export const metadata: Metadata = {
  title: 'Acme edit invoice',
  description: 'Edit invoice of the official Next.js Course',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  

 // return (<h1>"Edit invoice" </h1>)


  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);



  console.log(`Invoice recibido: ${JSON.stringify(invoice)}`);
  console.log(`ID recibido: ${id}`);


  
console.log(`not found : ${invoice}` );
console.log(`not id : ${invoice.id}` );
console.log(`not customer_id: ${invoice.customer_id}` );
console.log(`not amount: ${invoice.amount}` );
  

  if (!invoice ) {
    notFound();
  }
  
console.log(`Despues de not found Recibi esta id: ${id}` );

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}