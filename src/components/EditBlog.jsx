'use client'
import React, { useEffect } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useState } from 'react';
import editBlog from "@/firebase/firestore/editData";

export async function fetchTodos(title, desc, id) {
    const body = {
        title: title, description: desc,
        slug: title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
    }
    const response = await editBlog(body, id);
}

export default function UpdateBlog({id, blogTitle, blogDesc}) {
    const [title, setTitle] = useState(blogTitle);
    const [desc, setDesc] = useState(blogDesc);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    async function updateBlogHandler() {
        const data = await fetchTodos(title, desc, id)
    }
    return (
        <>
            {
                <div>
                    <Button onPress={onOpen}>edit Modal</Button>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                            <Input type="text" label='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <Input type="text" label="description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onPress={onClose} onClick={updateBlogHandler}>
                                            Save
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>

                </div>

            }
        </>


    )
}