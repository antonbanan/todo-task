import { AppShell, Button, Card, Center, Flex, Footer, Group, Header, Stack, Text } from "@mantine/core";
import { LuBanana} from 'react-icons/lu';
import React from "react";

export const ApplicationContainer = ({children}:any) => {

	return(
		<AppShell
			style={{
				background: "#FFFFFF",
				width: "100vw",
				height: "calc( 100vw - 162px)",
				paddingLeft: "0px"
		
			}}
			fixed
			footer={
				<Footer height={60} p="md">
					<Group position="apart" spacing="xl">
						<Text size="sm"><span style={{fontWeight: "bolder"}}
						> Created </span>by Anton Banan</Text>
						<Text size="sm"><span style={{fontWeight: "bolder"}}
						> <LuBanana/> Banan</span> 2023</Text>
					</Group>
				</Footer>
			}
			header={
				<Header height={70} p="md">
					<Group style={{display: "flex", alignItems: "center", height: "100%"}} position="apart">
						<Group>
							<Button component="a" disabled variant="filled">
								Todo app v 0.1.22
							</Button>
						</Group>
						<Group>
							<Button component="a" href="/" variant="filled">
								Home
							</Button>
							<Button component="a" href="/tasks" variant="filled">
								Tasks
							</Button>				
						</Group>
					</Group>
				</Header>
				
			}
		>
			<Stack style={{background: 'rgb(233 236 239 / 34%)'}}
				mx="auto"
				justify="center"
				w="60vw" 
				h="100%"
				px={10}
				// mt="0"
			>
				{children}
			</Stack>
		</AppShell>
	)
}