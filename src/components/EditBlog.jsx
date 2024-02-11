'use client'
import React, { useEffect } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";
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
                    <Button onPress={onOpen} className="font-medium">Click to Edit</Button>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent className="max-w-4xl">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Edit & have fun</ModalHeader>
                                    <ModalBody>
                                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col">
                                            <Textarea type="text" label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <Textarea type="text" label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
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