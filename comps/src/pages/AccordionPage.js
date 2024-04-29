import React from 'react';
import Accordion from '../components/Accordion';

export default function AccordionPage() {

  const items = [
    {
      key: '1',
      lable: "first",
      content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
      key: '2',
      lable: "second",
      content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
      key: '3',
      lable: "third",
      content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
  ];

  return <Accordion items={items} />
}
