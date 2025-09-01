"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const WHATSAPP_PHONE = "55SEUDDDSEUNUMERO";

export default function AcaiDoPedaco() {
  const [size, setSize] = useState("");
  const [extras, setExtras] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const sizes = [
    { value: "300ml", label: "300ml - R$ 12,00" },
    { value: "500ml", label: "500ml - R$ 18,00" },
    { value: "700ml", label: "700ml - R$ 24,00" },
  ];

  const toppings = [
    "Granola",
    "Leite em pó",
    "Leite condensado",
    "Banana",
    "Morangos",
    "Paçoca",
  ];

  const handleExtra = (extra) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleSubmit = () => {
    if (!size || !customer.name || !customer.phone || !customer.address) {
      alert("Preencha todos os campos do pedido!");
      return;
    }

    const msg =
      `*Novo pedido - Açaí do Pedaço*\n` +
      `*Cliente:* ${customer.name}\n` +
      `*Telefone:* ${customer.phone}\n` +
      `*Endereço:* ${customer.address}\n` +
      `*Tamanho:* ${size || "-"}\n` +
      `*Adicionais:* ${extras.length ? extras.join(", ") : "-"}\n` +
      `-------------------------\n` +
      `Obs: responder para confirmar o pedido.`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className=\"min-h-screen bg-purple-900 flex flex-col items-center p-6 text-white\">
      <h1 className=\"text-3xl font-bold mb-6\">Açaí do Pedaço Delivery</h1>
      <Card className=\"w-full max-w-lg\">
        <CardContent className=\"p-6 space-y-4\">
          <div>
            <p className=\"mb-2 font-semibold\">Escolha o tamanho:</p>
            <Select onValueChange={(v) => setSize(v)}>
              <SelectTrigger className=\"bg-white text-black\">
                <SelectValue placeholder=\"Selecione o tamanho\" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className=\"mb-2 font-semibold\">Adicionais:</p>
            <div className=\"grid grid-cols-2 gap-2\">
              {toppings.map((extra) => (
                <Button
                  key={extra}
                  variant={extras.includes(extra) ? "default" : "outline"}
                  onClick={() => handleExtra(extra)}
                  className={
                    extras.includes(extra)
                      ? \"bg-purple-600 text-white\"
                      : \"bg-white text-black\"
                  }
                >
                  {extra}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className=\"mb-2 font-semibold\">Seus dados:</p>
            <Input
              placeholder=\"Nome\"
              value={customer.name}
              onChange={(e) =>
                setCustomer((prev) => ({ ...prev, name: e.target.value }))
              }
              className=\"bg-white text-black mb-2\"
            />
            <Input
              placeholder=\"Telefone\"
              value={customer.phone}
              onChange={(e) =>
                setCustomer((prev) => ({ ...prev, phone: e.target.value }))
              }
              className=\"bg-white text-black mb-2\"
            />
            <Input
              placeholder=\"Endereço\"
              value={customer.address}
              onChange={(e) =>
                setCustomer((prev) => ({ ...prev, address: e.target.value }))
              }
              className=\"bg-white text-black\"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className=\"w-full bg-green-600 hover:bg-green-700 text-white\"
          >
            Finalizar Pedido (WhatsApp)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
