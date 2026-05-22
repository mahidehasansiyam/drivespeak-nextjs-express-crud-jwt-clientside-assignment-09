'use client';

import { AlertDialog, Button } from '@heroui/react';

export function DeleteCar({car}) {
  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop className="bg-black/60">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#090d16] text-white border border-gray-700 rounded-lg">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="text-white">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-white">
                Delete <span className="text-red-400">{car.name}</span> permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body className="text-gray-300">
              <p>
                This will permanently delete{' '}
                <strong className="text-red-400">{car.name}</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                className="bg-gray-700 text-white"
                slot="close"
                variant="tertiary"
              >
                Cancel
              </Button>
              <Button
                className="bg-red-600 text-white"
                slot="close"
                variant="danger"
              >
                Delete {car.name}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
