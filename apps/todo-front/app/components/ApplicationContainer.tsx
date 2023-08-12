import { AppShell, Button, Footer, Group, Header, Text } from "@mantine/core";
import { LuBanana} from 'react-icons/lu';
import React from "react";

export const ApplicationContainer = ({children}:any) => {
	return(
		<AppShell
			style={{
				
					background: "#FFFFFF",
					width: "100vw",
					height: "100vh",
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
							<Text size="xl" weight="bolder">Todo Task List</Text>	
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
			{children}
		</AppShell>
	)
}