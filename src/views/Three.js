/*

*** Primary color:

   shade 0 = #00A200 = rgb(  0,162,  0) = rgba(  0,162,  0,1) = rgb0(0,0.635,0)
   shade 1 = #3DCC3D = rgb( 61,204, 61) = rgba( 61,204, 61,1) = rgb0(0.239,0.8,0.239)
   shade 2 = #12C612 = rgb( 18,198, 18) = rgba( 18,198, 18,1) = rgb0(0.071,0.776,0.071)
   shade 3 = #008500 = rgb(  0,133,  0) = rgba(  0,133,  0,1) = rgb0(0,0.522,0)
   shade 4 = #006300 = rgb(  0, 99,  0) = rgba(  0, 99,  0,1) = rgb0(0,0.388,0)

*** Secondary color (1):

   shade 0 = #007A7A = rgb(  0,122,122) = rgba(  0,122,122,1) = rgb0(0,0.478,0.478)
   shade 1 = #2E9999 = rgb( 46,153,153) = rgba( 46,153,153,1) = rgb0(0.18,0.6,0.6)
   shade 2 = #0D9494 = rgb( 13,148,148) = rgba( 13,148,148,1) = rgb0(0.051,0.58,0.58)
   shade 3 = #006464 = rgb(  0,100,100) = rgba(  0,100,100,1) = rgb0(0,0.392,0.392)
   shade 4 = #004A4A = rgb(  0, 74, 74) = rgba(  0, 74, 74,1) = rgb0(0,0.29,0.29)

*** Secondary color (2):

   shade 0 = #7EBD00 = rgb(126,189,  0) = rgba(126,189,  0,1) = rgb0(0.494,0.741,0)
   shade 1 = #B6EE47 = rgb(182,238, 71) = rgba(182,238, 71,1) = rgb0(0.714,0.933,0.278)
   shade 2 = #A1E715 = rgb(161,231, 21) = rgba(161,231, 21,1) = rgb0(0.631,0.906,0.082)
   shade 3 = #679B00 = rgb(103,155,  0) = rgba(103,155,  0,1) = rgb0(0.404,0.608,0)
   shade 4 = #4D7400 = rgb( 77,116,  0) = rgba( 77,116,  0,1) = rgb0(0.302,0.455,0)

*/

import Link from "next/link"
import { Flex, Box, Text, Image, Button, Link as A } from "theme-ui"
import GridTile from "../ui/GridTile"

const Three = () => (
  <Box
    id="three"
    sx={{
      display: "grid",
      gridTemplateColumns: [
        "1fr 1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr",
      ],
      gridAutoRows: "1fr",
      color: "white",
      width: "100%",
    }}
  >
    <GridTile bg="#0D9494">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/arrow_upward_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#12C612">
      <Text
        as="p"
        sx={{
          fontWeight: 900,
          fontSize: [2, 3],
          textAlign: "center",
          px: 3,
          maxWidth: "200px",
          mx: "auto",
          lineHeight: 1.3,
        }}
      >
        Created by John Polacek
      </Text>
    </GridTile>
    <GridTile bg="#A1E715">
      <Text
        sx={{
          fontWeight: 900,
          fontSize: [1, 2],
          textAlign: "center",
          px: 3,
        }}
      >
        from Chicago
      </Text>
    </GridTile>
    <GridTile bg="#3DCC3D">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/auto_awesome_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#2E9999">
      <Image sx={{ opacity: 0.5 }} width="48" src="/img/icons/code_24dp.svg" />
    </GridTile>
    <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/emoji_events_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#B6EE47">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/lightbulb_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#008500">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/phone_android_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#006464">
      <Text sx={{ display: ["none", "inline"] }}>follow </Text>
      <A
        sx={{
          fontWeight: 600,
          fontSize: ["14px", 0, 1],
          color: "greenyellow",
          ml: 2,
        }}
        href="https://twitter.com/johnpolacek"
      >
        @johnpolacek
      </A>
    </GridTile>
    <GridTile bg="#679B00">
      <Image
        sx={{ opacity: 0.5 }}
        width="40"
        src="/img/icons/thumb_up_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#00A200">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/trending_up_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#004A4A">
      <A
        sx={{
          mx: 2,
          fontWeight: 600,
          fontSize: ["12px", 0, 1, 3],
          color: "white",
        }}
        href="https://johnpolacek.com"
      >
        johnpolacek.com
      </A>
    </GridTile>
    <GridTile bg="#7EBD00">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/emoji_people_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#006300" display={["none", "flex"]}>
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/workspace_premium_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#008500">
      <Link href="/docs" passHref={true}>
        <A
          sx={{
            textDecoration: "none",
            width: "auto",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              ml: ["auto", "auto", "auto", 0],
              mr: ["auto", "auto", "auto", 0],
              mb: 3,
              fontSize: [0, 1, 2],
              fontWeight: 600,
              p: 3,
              width: ["100px", "120px", "160px"],
              display: "flex",
              justifyContent: "center",
              background: "rgba(0,0,0,.25)",
              color: "white",
            }}
          >
            <Image
              width="24"
              height="24"
              sx={{ ml: [-2, -3, -2], mr: [2, 3, 2], width: ["18px", "24px"] }}
              src="/img/double-right-white.svg"
            />
            docs
          </Button>
        </A>
      </Link>
    </GridTile>
    <GridTile bg="#679B00">
      <Image sx={{ opacity: 0.5 }} width="48" src="/img/icons/grade_24dp.svg" />
    </GridTile>
    <GridTile>
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/cloud_done_24dp.svg"
      />
    </GridTile>
    <GridTile bg="#12C612">
      <A
        sx={{
          mx: 2,
          fontSize: ["12px", 0, 1],
          fontWeight: 600,
          color: "rgba(0,0,0,75)",
        }}
        href="https://github.com/johnpolacek"
      >
        <Text sx={{ display: ["inline", "none"] }} as="span">
          on{" "}
        </Text>
        github
        <Text sx={{ display: ["none", "inline"] }} as="span">
          .com/johnpolacek
        </Text>
      </A>
    </GridTile>
    <GridTile bg="#0D9494">
      <Image
        sx={{ opacity: 0.5 }}
        width="48"
        src="/img/icons/computer_24dp.svg"
      />
    </GridTile>
    <GridTile display={["none", "flex"]} bg="#3DCC3D">
      <Image sx={{ opacity: 0.5 }} width="48" src="/img/icons/bolt_24dp.svg" />
    </GridTile>
  </Box>
)

export default Three
