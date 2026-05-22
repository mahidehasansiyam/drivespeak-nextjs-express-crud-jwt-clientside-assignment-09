'use client';

import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { Edit } from 'lucide-react';

export function UpdateModal({ car }) {
  return (
    <Modal>
      <Button className="bg-[#090d16] text-white p-3 rounded-2xl">Edit</Button>

      <Modal.Backdrop className="bg-black/60">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-[#090d16] text-white border border-gray-700">
            <Modal.CloseTrigger />

            <Modal.Header className="text-white">
              <Modal.Icon className="bg-red-500/20 text-red-400">
                <Edit />
              </Modal.Icon>

              <Modal.Heading className="text-white">Update Information</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-gray-400">
                Fill out the form below and we'll get back to you.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              {/* SECTION BG + TEXT COLOR */}
              <Surface
                variant="default"
                className="bg-[#111827] text-white p-5 rounded-2xl border border-gray-700"
              >
                <form className="flex flex-col gap-4">
                  <TextField
                    className="w-full text-white"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label className="text-gray-300">Name</Label>

                    <Input
                      placeholder="Enter your name"
                      className="bg-[#1f2937] text-white"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                  >
                    <Label className="text-gray-300">Email</Label>

                    <Input
                      placeholder="Enter your email"
                      className="bg-[#1f2937] text-white"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Label className="text-gray-300">Phone</Label>

                    <Input
                      placeholder="Enter your phone number"
                      className="bg-[#1f2937] text-white"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="company"
                    variant="secondary"
                  >
                    <Label className="text-gray-300">Company</Label>

                    <Input
                      placeholder="Enter your company name"
                      className="bg-[#1f2937] text-white"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="message"
                    variant="secondary"
                  >
                    <Label className="text-gray-300">Message</Label>

                    <Input
                      placeholder="Enter your message"
                      className="bg-[#1f2937] text-white"
                    />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button
                slot="close"
                variant="secondary"
                className="bg-gray-700 text-white"
              >
                Cancel
              </Button>

              <Button slot="close" className="bg-blue-600 text-white">
                Update Car
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
