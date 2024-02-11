'use client'
import React from "react";
import { useAuthContext } from '@/context/AuthContext';
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export async function fetchTodos(user, title, desc) {
    const response = await fetch("http://localhost:3000/api/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: uuidv4(),
            title: title, description: desc, createdAt: new Date(),
            image:"https://picsum.photos/200/300",
            slug: title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""), userId: user.uid
        })
    });
    return response.json()
}

export default function createBlog() {
    const { user } = useAuthContext()
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    async function createBlogHandler() {
        const data = await fetchTodos(user, title, desc)
        setDesc('');
        setTitle('');
    }
    return (
        <>
            {user ?
                <div className="flex justify-end my-6 mr-6">
                    <Button onPress={onOpen} className="font-medium">Create Your own Blog</Button>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent className="max-w-3xl">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Create and Publish</ModalHeader>
                                    <ModalBody>
                                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col">
                                            <Textarea type="text" label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <Textarea type="text" label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter className="justify-center">
                                        <Button color="primary" onPress={onClose} onClick={createBlogHandler}>
                                            Publish
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>

                </div> : <></>

            }
        </>


    )
}

